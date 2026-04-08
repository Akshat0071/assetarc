/* ============================================
   BLOG ADMIN MODULE - JAVASCRIPT
   ============================================ */

// === API Configuration ===
// Replace these URLs with your actual API endpoints when connecting to backend
const API_CONFIG = {
    baseUrl: '/api/admin/blog-posts',
    // Set to true to use mock data, false to use real API
    useMockData: true
};

// === State Management ===
let state = {
    posts: [],
    filteredPosts: [],
    searchQuery: '',
    statusFilter: 'all',
    editingPost: null,
    postToDelete: null,
    tags: [],
    metaKeywords: []
};

// === Mock Data ===
const mockPosts = [
    {
        id: '1',
        title: 'Understanding Mutual Funds: A Beginner\'s Guide',
        slug: 'understanding-mutual-funds-beginners-guide',
        content: '<p>Mutual funds are investment vehicles that pool money from multiple investors...</p>',
        excerpt: 'Learn the basics of mutual funds and how to start investing.',
        featured_image_url: 'https://example.com/mf-image.jpg',
        featured_image_alt: 'Mutual Funds illustration',
        author_name: 'Stockstrail Team',
        category: 'Mutual Funds',
        tags: ['Investment', 'Beginner', 'Finance'],
        meta_title: 'Mutual Funds Guide for Beginners',
        meta_description: 'Complete guide to understanding mutual funds for new investors.',
        meta_keywords: ['mutual funds', 'investment', 'finance', 'beginner'],
        og_image_url: 'https://example.com/og-mf.jpg',
        status: 'published',
        visible_on_website: true,
        published_at: '2024-01-15T10:00:00Z',
        created_at: '2024-01-15T10:00:00Z'
    },
    {
        id: '2',
        title: 'Top 10 Stocks to Watch in 2024',
        slug: 'top-10-stocks-watch-2024',
        content: '<p>Here are the top performing stocks to keep an eye on this year...</p>',
        excerpt: 'Expert analysis on the best stocks to invest in this year.',
        featured_image_url: 'https://example.com/stocks-image.jpg',
        featured_image_alt: 'Stock market chart',
        author_name: 'John Doe',
        category: 'Stock Market',
        tags: ['Stocks', '2024', 'Market Analysis'],
        meta_title: 'Best Stocks 2024 - Investment Guide',
        meta_description: 'Expert picks for the best stocks to invest in 2024.',
        meta_keywords: ['stocks', 'investment', '2024', 'market'],
        og_image_url: 'https://example.com/og-stocks.jpg',
        status: 'published',
        visible_on_website: true,
        published_at: '2024-01-20T14:30:00Z',
        created_at: '2024-01-20T14:30:00Z'
    },
    {
        id: '3',
        title: 'Insurance Planning for Young Professionals',
        slug: 'insurance-planning-young-professionals',
        content: '<p>Insurance is crucial for financial security. Here\'s what you need to know...</p>',
        excerpt: 'Essential insurance tips for young professionals starting their career.',
        featured_image_url: null,
        featured_image_alt: null,
        author_name: 'Jane Smith',
        category: 'Insurance',
        tags: ['Insurance', 'Young Professionals', 'Planning'],
        meta_title: 'Insurance Guide for Young Professionals',
        meta_description: 'Learn about essential insurance coverage for young professionals.',
        meta_keywords: ['insurance', 'young professionals', 'financial planning'],
        og_image_url: null,
        status: 'draft',
        visible_on_website: false,
        published_at: null,
        created_at: '2024-02-01T09:00:00Z'
    },
    {
        id: '4',
        title: 'Fixed Deposits: Safe Investment Option',
        slug: 'fixed-deposits-safe-investment',
        content: '<p>Fixed deposits offer guaranteed returns with minimal risk...</p>',
        excerpt: 'Everything you need to know about fixed deposits as an investment option.',
        featured_image_url: 'https://example.com/fd-image.jpg',
        featured_image_alt: 'Fixed deposit illustration',
        author_name: 'Stockstrail Team',
        category: 'Fixed Deposits',
        tags: ['FD', 'Safe Investment', 'Returns'],
        meta_title: 'Fixed Deposits - Safe Investment Guide',
        meta_description: 'Complete guide to fixed deposits as a safe investment option.',
        meta_keywords: ['fixed deposits', 'FD', 'safe investment', 'returns'],
        og_image_url: 'https://example.com/og-fd.jpg',
        status: 'published',
        visible_on_website: true,
        published_at: '2024-02-10T11:00:00Z',
        created_at: '2024-02-10T11:00:00Z'
    }
];

// === Utility Functions ===

/**
 * Generate a URL-friendly slug from a title
 */
function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * Format date to readable string
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

/**
 * Show toast notification
 */
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    
    toast.className = `toast ${type}`;
    toastMessage.textContent = message;
    
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// === API Functions ===

/**
 * Fetch all blog posts
 */
async function fetchPosts() {
    if (API_CONFIG.useMockData) {
        state.posts = [...mockPosts];
        return state.posts;
    }
    
    try {
        const response = await fetch(API_CONFIG.baseUrl);
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        state.posts = data;
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        showToast('Failed to load blog posts', 'error');
        return [];
    }
}

/**
 * Create a new blog post
 */
async function createPost(postData) {
    if (API_CONFIG.useMockData) {
        const newPost = {
            ...postData,
            id: Date.now().toString(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            published_at: postData.status === 'published' ? new Date().toISOString() : null,
            is_published: postData.status === 'published'
        };
        state.posts.unshift(newPost);
        return newPost;
    }
    
    try {
        const response = await fetch(API_CONFIG.baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        });
        if (!response.ok) throw new Error('Failed to create post');
        return await response.json();
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
}

/**
 * Update an existing blog post
 */
async function updatePost(id, postData) {
    if (API_CONFIG.useMockData) {
        const index = state.posts.findIndex(p => p.id === id);
        if (index !== -1) {
            const updatedPost = {
                ...state.posts[index],
                ...postData,
                updated_at: new Date().toISOString(),
                published_at: postData.status === 'published' && !state.posts[index].published_at 
                    ? new Date().toISOString() 
                    : state.posts[index].published_at,
                is_published: postData.status === 'published'
            };
            state.posts[index] = updatedPost;
            return updatedPost;
        }
        throw new Error('Post not found');
    }
    
    try {
        const response = await fetch(`${API_CONFIG.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        });
        if (!response.ok) throw new Error('Failed to update post');
        return await response.json();
    } catch (error) {
        console.error('Error updating post:', error);
        throw error;
    }
}

/**
 * Delete a blog post
 */
async function deletePost(id) {
    if (API_CONFIG.useMockData) {
        state.posts = state.posts.filter(p => p.id !== id);
        return true;
    }
    
    try {
        const response = await fetch(`${API_CONFIG.baseUrl}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete post');
        return true;
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
}

/**
 * Toggle post visibility
 */
async function toggleVisibility(id, visible) {
    if (API_CONFIG.useMockData) {
        const index = state.posts.findIndex(p => p.id === id);
        if (index !== -1) {
            state.posts[index].visible_on_website = visible;
            return state.posts[index];
        }
        throw new Error('Post not found');
    }
    
    try {
        const response = await fetch(`${API_CONFIG.baseUrl}/${id}/toggle-visibility`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ visible })
        });
        if (!response.ok) throw new Error('Failed to toggle visibility');
        return await response.json();
    } catch (error) {
        console.error('Error toggling visibility:', error);
        throw error;
    }
}

// === DOM Functions ===

/**
 * Update stats display
 */
function updateStats() {
    const total = state.posts.length;
    const published = state.posts.filter(p => p.status === 'published').length;
    const drafts = state.posts.filter(p => p.status === 'draft').length;
    const visible = state.posts.filter(p => p.visible_on_website).length;
    
    document.getElementById('totalPosts').textContent = total;
    document.getElementById('publishedPosts').textContent = published;
    document.getElementById('draftPosts').textContent = drafts;
    document.getElementById('visiblePosts').textContent = visible;
}

/**
 * Filter posts based on search and status
 */
function filterPosts() {
    let filtered = [...state.posts];
    
    // Apply search filter
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(post =>
            post.title.toLowerCase().includes(query) ||
            (post.category && post.category.toLowerCase().includes(query)) ||
            post.author_name.toLowerCase().includes(query)
        );
    }
    
    // Apply status filter
    if (state.statusFilter !== 'all') {
        filtered = filtered.filter(post => post.status === state.statusFilter);
    }
    
    state.filteredPosts = filtered;
    renderPosts();
}

/**
 * Render posts table
 */
function renderPosts() {
    const tbody = document.getElementById('postsTableBody');
    const noPostsMessage = document.getElementById('noPostsMessage');
    
    if (state.filteredPosts.length === 0) {
        tbody.innerHTML = '';
        noPostsMessage.classList.remove('hidden');
        return;
    }
    
    noPostsMessage.classList.add('hidden');
    
    tbody.innerHTML = state.filteredPosts.map(post => `
        <tr>
            <td class="post-title">${escapeHtml(post.title)}</td>
            <td>${post.category ? escapeHtml(post.category) : '<span class="text-muted">—</span>'}</td>
            <td>${escapeHtml(post.author_name)}</td>
            <td>${formatDate(post.created_at)}</td>
            <td>
                <span class="status-badge ${post.status}">${post.status}</span>
            </td>
            <td>
                <button class="action-btn ${post.visible_on_website ? 'visible' : 'hidden'}" 
                        onclick="handleToggleVisibility('${post.id}')"
                        title="${post.visible_on_website ? 'Hide from website' : 'Show on website'}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${post.visible_on_website 
                            ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>'
                            : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>'
                        }
                    </svg>
                </button>
            </td>
            <td class="text-right">
                <div class="action-buttons">
                    <button class="action-btn" onclick="handleEditPost('${post.id}')" title="Edit">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    <button class="action-btn delete" onclick="handleDeleteClick('${post.id}')" title="Delete">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// === Modal Functions ===

/**
 * Open post form modal
 */
function openPostModal(post = null) {
    const modal = document.getElementById('postModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('postForm');
    
    state.editingPost = post;
    state.tags = [];
    state.metaKeywords = [];
    
    if (post) {
        modalTitle.textContent = 'Edit Blog Post';
        document.getElementById('postId').value = post.id;
        document.getElementById('title').value = post.title;
        document.getElementById('slug').value = post.slug;
        document.getElementById('excerpt').value = post.excerpt || '';
        document.getElementById('content').value = post.content;
        document.getElementById('featuredImageUrl').value = post.featured_image_url || '';
        document.getElementById('featuredImageAlt').value = post.featured_image_alt || '';
        document.getElementById('category').value = post.category || '';
        document.getElementById('metaTitle').value = post.meta_title || '';
        document.getElementById('metaDescription').value = post.meta_description || '';
        document.getElementById('ogImageUrl').value = post.og_image_url || '';
        document.getElementById('status').value = post.status;
        document.getElementById('visibleOnWebsite').checked = post.visible_on_website;
        
        state.tags = post.tags ? [...post.tags] : [];
        state.metaKeywords = post.meta_keywords ? [...post.meta_keywords] : [];
    } else {
        modalTitle.textContent = 'New Blog Post';
        form.reset();
        document.getElementById('postId').value = '';
        document.getElementById('visibleOnWebsite').checked = true;
    }
    
    renderTags();
    renderMetaKeywords();
    modal.classList.add('active');
}

/**
 * Close post form modal
 */
function closePostModal() {
    const modal = document.getElementById('postModal');
    modal.classList.remove('active');
    state.editingPost = null;
    state.tags = [];
    state.metaKeywords = [];
}

/**
 * Open delete confirmation modal
 */
function openDeleteModal(post) {
    const modal = document.getElementById('deleteModal');
    document.getElementById('deletePostTitle').textContent = post.title;
    state.postToDelete = post;
    modal.classList.add('active');
}

/**
 * Close delete confirmation modal
 */
function closeDeleteModal() {
    const modal = document.getElementById('deleteModal');
    modal.classList.remove('active');
    state.postToDelete = null;
}

// === Tag Functions ===

/**
 * Render tags
 */
function renderTags() {
    const container = document.getElementById('tagsContainer');
    container.innerHTML = state.tags.map(tag => `
        <span class="tag">
            ${escapeHtml(tag)}
            <button type="button" class="tag-remove" onclick="removeTag('${escapeHtml(tag)}')">×</button>
        </span>
    `).join('');
}

/**
 * Add tag
 */
function addTag(tag) {
    tag = tag.trim();
    if (tag && !state.tags.includes(tag)) {
        state.tags.push(tag);
        renderTags();
    }
}

/**
 * Remove tag
 */
function removeTag(tag) {
    state.tags = state.tags.filter(t => t !== tag);
    renderTags();
}

/**
 * Render meta keywords
 */
function renderMetaKeywords() {
    const container = document.getElementById('metaKeywordsContainer');
    container.innerHTML = state.metaKeywords.map(keyword => `
        <span class="tag">
            ${escapeHtml(keyword)}
            <button type="button" class="tag-remove" onclick="removeMetaKeyword('${escapeHtml(keyword)}')">×</button>
        </span>
    `).join('');
}

/**
 * Add meta keyword
 */
function addMetaKeyword(keyword) {
    keyword = keyword.trim();
    if (keyword && !state.metaKeywords.includes(keyword)) {
        state.metaKeywords.push(keyword);
        renderMetaKeywords();
    }
}

/**
 * Remove meta keyword
 */
function removeMetaKeyword(keyword) {
    state.metaKeywords = state.metaKeywords.filter(k => k !== keyword);
    renderMetaKeywords();
}

// === Rich Text Editor Functions ===

/**
 * Insert formatting into content
 */
function insertFormat(format) {
    const textarea = document.getElementById('content');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);
    
    let newText = '';
    
    switch (format) {
        case 'bold':
            newText = text.substring(0, start) + `<strong>${selectedText}</strong>` + text.substring(end);
            break;
        case 'italic':
            newText = text.substring(0, start) + `<em>${selectedText}</em>` + text.substring(end);
            break;
        case 'h2':
            newText = text.substring(0, start) + `<h2>${selectedText || 'Heading'}</h2>` + text.substring(end);
            break;
        case 'link':
            const url = prompt('Enter URL:');
            if (url) {
                newText = text.substring(0, start) + `<a href="${url}">${selectedText || 'Link'}</a>` + text.substring(end);
            } else {
                return;
            }
            break;
        case 'list':
            newText = text.substring(0, start) + `<ul>\n  <li>${selectedText || 'List item'}</li>\n</ul>` + text.substring(end);
            break;
        default:
            return;
    }
    
    textarea.value = newText;
    textarea.focus();
    textarea.setSelectionRange(start, start + newText.length - text.length);
}

// === Event Handlers ===

/**
 * Handle new post button click
 */
function handleNewPost() {
    openPostModal();
}

/**
 * Handle edit post button click
 */
function handleEditPost(id) {
    const post = state.posts.find(p => p.id === id);
    if (post) {
        openPostModal(post);
    }
}

/**
 * Handle delete click
 */
function handleDeleteClick(id) {
    const post = state.posts.find(p => p.id === id);
    if (post) {
        openDeleteModal(post);
    }
}

/**
 * Handle confirm delete
 */
async function handleConfirmDelete() {
    if (!state.postToDelete) return;
    
    try {
        await deletePost(state.postToDelete.id);
        showToast('Blog post deleted successfully');
        closeDeleteModal();
        await loadPosts();
    } catch (error) {
        showToast('Failed to delete blog post', 'error');
    }
}

/**
 * Handle toggle visibility
 */
async function handleToggleVisibility(id) {
    const post = state.posts.find(p => p.id === id);
    if (!post) return;
    
    try {
        const updated = await toggleVisibility(id, !post.visible_on_website);
        showToast(`Blog post ${updated.visible_on_website ? 'shown' : 'hidden'} on website`);
        await loadPosts();
    } catch (error) {
        showToast('Failed to toggle visibility', 'error');
    }
}

/**
 * Handle form submit
 */
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const saveBtn = document.getElementById('saveBtn');
    const btnText = saveBtn.querySelector('.btn-text');
    const btnLoader = saveBtn.querySelector('.btn-loader');
    
    // Show loading state
    saveBtn.disabled = true;
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');
    
    try {
        const formData = {
            title: document.getElementById('title').value,
            slug: document.getElementById('slug').value,
            content: document.getElementById('content').value,
            excerpt: document.getElementById('excerpt').value,
            featured_image_url: document.getElementById('featuredImageUrl').value || null,
            featured_image_alt: document.getElementById('featuredImageAlt').value || null,
            category: document.getElementById('category').value || null,
            tags: state.tags,
            meta_title: document.getElementById('metaTitle').value || null,
            meta_description: document.getElementById('metaDescription').value || null,
            meta_keywords: state.metaKeywords,
            og_image_url: document.getElementById('ogImageUrl').value || null,
            status: document.getElementById('status').value,
            visible_on_website: document.getElementById('visibleOnWebsite').checked,
            author_name: 'Admin User' // Replace with actual user name
        };
        
        if (state.editingPost) {
            await updatePost(state.editingPost.id, formData);
            showToast('Blog post updated successfully');
        } else {
            await createPost(formData);
            showToast('Blog post created successfully');
        }
        
        closePostModal();
        await loadPosts();
    } catch (error) {
        showToast('Failed to save blog post', 'error');
    } finally {
        // Reset loading state
        saveBtn.disabled = false;
        btnText.classList.remove('hidden');
        btnLoader.classList.add('hidden');
    }
}

/**
 * Handle title input change (auto-generate slug)
 */
function handleTitleChange(event) {
    const title = event.target.value;
    const slugInput = document.getElementById('slug');
    
    if (title && !state.editingPost) {
        slugInput.value = generateSlug(title);
    }
}

/**
 * Load posts and update UI
 */
async function loadPosts() {
    await fetchPosts();
    filterPosts();
    updateStats();
}

// === Initialize ===

document.addEventListener('DOMContentLoaded', () => {
    // Load initial data
    loadPosts();
    
    // Event Listeners
    
    // New Post Button
    document.getElementById('newPostBtn').addEventListener('click', handleNewPost);
    
    // Search Input
    document.getElementById('searchInput').addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        filterPosts();
    });
    
    // Status Filter
    document.getElementById('statusFilter').addEventListener('change', (e) => {
        state.statusFilter = e.target.value;
        filterPosts();
    });
    
    // Modal Close Buttons
    document.getElementById('closeModalBtn').addEventListener('click', closePostModal);
    document.getElementById('cancelBtn').addEventListener('click', closePostModal);
    document.getElementById('closeDeleteModalBtn').addEventListener('click', closeDeleteModal);
    document.getElementById('cancelDeleteBtn').addEventListener('click', closeDeleteModal);
    
    // Confirm Delete Button
    document.getElementById('confirmDeleteBtn').addEventListener('click', handleConfirmDelete);
    
    // Form Submit
    document.getElementById('postForm').addEventListener('submit', handleFormSubmit);
    
    // Title Input (auto-generate slug)
    document.getElementById('title').addEventListener('input', handleTitleChange);
    
    // Editor Toolbar Buttons
    document.querySelectorAll('.editor-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const format = btn.dataset.format;
            insertFormat(format);
        });
    });
    
    // Tag Input
    document.getElementById('tagInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag(e.target.value);
            e.target.value = '';
        }
    });
    
    document.getElementById('addTagBtn').addEventListener('click', () => {
        const input = document.getElementById('tagInput');
        addTag(input.value);
        input.value = '';
    });
    
    // Meta Keywords Input
    document.getElementById('metaKeywordsInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addMetaKeyword(e.target.value);
            e.target.value = '';
        }
    });
    
    document.getElementById('addMetaKeywordBtn').addEventListener('click', () => {
        const input = document.getElementById('metaKeywordsInput');
        addMetaKeyword(input.value);
        input.value = '';
    });
    
    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
});

// Export functions for global access (needed for inline onclick handlers)
window.handleNewPost = handleNewPost;
window.handleEditPost = handleEditPost;
window.handleDeleteClick = handleDeleteClick;
window.handleToggleVisibility = handleToggleVisibility;
window.removeTag = removeTag;
window.removeMetaKeyword = removeMetaKeyword;
