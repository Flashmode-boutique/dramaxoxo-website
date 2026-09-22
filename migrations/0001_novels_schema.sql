-- DRAMA XOXO: Cloudflare D1 Database Migration
-- Migration 0001: Web Novels, Chapters, Author Applications, Purchases and Verifiable Royalties Ledger

-- 1. Users Table (Role-based security)
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    display_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'VIEWER' CHECK (role IN ('VIEWER', 'CREATOR_PENDING', 'APPROVED_CREATOR', 'ADMIN')),
    auth_token TEXT,
    coins_balance INTEGER NOT NULL DEFAULT 0,
    created_at INTEGER NOT NULL DEFAULT (unixepoch()),
    updated_at INTEGER NOT NULL DEFAULT (unixepoch())
);

-- 2. Author Applications Table
CREATE TABLE IF NOT EXISTS author_applications (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    pen_name TEXT NOT NULL,
    contact_email TEXT NOT NULL,
    bio TEXT NOT NULL,
    sample_title TEXT NOT NULL,
    sample_content TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED')),
    reviewer_note TEXT,
    reviewed_by TEXT,
    created_at INTEGER NOT NULL DEFAULT (unixepoch()),
    reviewed_at INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 3. Novels Table
CREATE TABLE IF NOT EXISTS novels (
    id TEXT PRIMARY KEY,
    author_id TEXT NOT NULL,
    author_name TEXT NOT NULL,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    synopsis TEXT NOT NULL,
    cover_url TEXT NOT NULL,
    genre TEXT NOT NULL,
    tags TEXT, -- JSON array of tags, e.g. ["Romance", "Vengeance", "Haitian Heritage"]
    status TEXT NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT', 'SUBMITTED', 'PUBLISHED', 'ARCHIVED')),
    views_count INTEGER NOT NULL DEFAULT 0,
    rating REAL NOT NULL DEFAULT 5.0,
    created_at INTEGER NOT NULL DEFAULT (unixepoch()),
    updated_at INTEGER NOT NULL DEFAULT (unixepoch()),
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 4. Novel Chapters Table
CREATE TABLE IF NOT EXISTS novel_chapters (
    id TEXT PRIMARY KEY,
    novel_id TEXT NOT NULL,
    chapter_index INTEGER NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    word_count INTEGER NOT NULL DEFAULT 0,
    is_paid INTEGER NOT NULL DEFAULT 0 CHECK (is_paid IN (0, 1)),
    coin_price INTEGER NOT NULL DEFAULT 15,
    status TEXT NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT', 'SUBMITTED', 'PUBLISHED', 'ARCHIVED')),
    published_at INTEGER,
    created_at INTEGER NOT NULL DEFAULT (unixepoch()),
    updated_at INTEGER NOT NULL DEFAULT (unixepoch()),
    UNIQUE(novel_id, chapter_index),
    FOREIGN KEY (novel_id) REFERENCES novels(id) ON DELETE CASCADE
);

-- 5. Chapter Purchases (Server-Side Verified)
CREATE TABLE IF NOT EXISTS chapter_purchases (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    novel_id TEXT NOT NULL,
    chapter_id TEXT NOT NULL,
    coins_spent INTEGER NOT NULL DEFAULT 0,
    amount_cents INTEGER NOT NULL DEFAULT 0,
    stripe_session_id TEXT,
    verified_server_side INTEGER NOT NULL DEFAULT 1,
    created_at INTEGER NOT NULL DEFAULT (unixepoch()),
    UNIQUE(user_id, chapter_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (novel_id) REFERENCES novels(id) ON DELETE CASCADE,
    FOREIGN KEY (chapter_id) REFERENCES novel_chapters(id) ON DELETE CASCADE
);

-- 6. Verifiable Royalties Ledger (No fake numbers, strict immutable entries)
CREATE TABLE IF NOT EXISTS royalties_ledger (
    id TEXT PRIMARY KEY,
    purchase_id TEXT NOT NULL,
    author_id TEXT NOT NULL,
    novel_id TEXT NOT NULL,
    chapter_id TEXT NOT NULL,
    gross_amount_cents INTEGER NOT NULL,
    author_cut_cents INTEGER NOT NULL, -- e.g. 70% of gross
    platform_cut_cents INTEGER NOT NULL, -- 30% of gross
    rate_percent REAL NOT NULL DEFAULT 70.0,
    status TEXT NOT NULL DEFAULT 'ACCRUED' CHECK (status IN ('ACCRUED', 'PAID_OUT')),
    payout_id TEXT,
    created_at INTEGER NOT NULL DEFAULT (unixepoch()),
    FOREIGN KEY (purchase_id) REFERENCES chapter_purchases(id),
    FOREIGN KEY (author_id) REFERENCES users(id),
    FOREIGN KEY (novel_id) REFERENCES novels(id),
    FOREIGN KEY (chapter_id) REFERENCES novel_chapters(id)
);

-- 7. Reading Progress Table
CREATE TABLE IF NOT EXISTS reading_progress (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    novel_id TEXT NOT NULL,
    chapter_id TEXT NOT NULL,
    chapter_index INTEGER NOT NULL,
    scroll_position REAL NOT NULL DEFAULT 0.0,
    updated_at INTEGER NOT NULL DEFAULT (unixepoch()),
    UNIQUE(user_id, novel_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (novel_id) REFERENCES novels(id) ON DELETE CASCADE,
    FOREIGN KEY (chapter_id) REFERENCES novel_chapters(id) ON DELETE CASCADE
);

-- Indices for rapid queries and filtering
CREATE INDEX IF NOT EXISTS idx_novels_slug ON novels(slug);
CREATE INDEX IF NOT EXISTS idx_novels_status ON novels(status);
CREATE INDEX IF NOT EXISTS idx_novels_genre ON novels(genre);
CREATE INDEX IF NOT EXISTS idx_chapters_novel_status ON novel_chapters(novel_id, status);
CREATE INDEX IF NOT EXISTS idx_purchases_user ON chapter_purchases(user_id);
CREATE INDEX IF NOT EXISTS idx_royalties_author ON royalties_ledger(author_id, status);
CREATE INDEX IF NOT EXISTS idx_reading_progress_user ON reading_progress(user_id);
