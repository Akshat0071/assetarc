# Blog Admin Module

A fully functional, self-contained frontend module for blog management that can be easily integrated into any dashboard.

## Features

- **Complete CRUD Operations**: Create, read, update, and delete blog posts
- **Rich Text Editor**: Built-in formatting toolbar for HTML content
- **Search & Filter**: Real-time search by title, category, or author; filter by status
- **Stats Dashboard**: Overview of total posts, published, drafts, and visible posts
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Mock Data Support**: Ready-to-use with mock data, easy to connect to real API
- **SEO Management**: Meta tags, Open Graph images, and keyword support
- **Category & Tags**: Organize posts with categories and custom tags
- **Visibility Control**: Toggle website visibility for individual posts

## File Structure

```
public/blog-admin/
├── blog-admin.html      # Main HTML file with semantic structure
├── blog-admin.css       # Modular CSS with customizable variables
├── blog-admin.js        # Vanilla JavaScript with mock data handling
└── README.md           # This file
```

## Quick Start

### 1. Basic Usage

Simply open `blog-admin.html` in a web browser to start using the module with mock data.

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="blog-admin.css">
</head>
<body>
    <!-- Include the HTML content from blog-admin.html -->
    <script src="blog-admin.js"></script>
</body>
</html>
```

### 2. Integration into Existing Dashboard

To integrate into your existing dashboard:

1. **Copy the files** to your project's public or assets directory
2. **Include the CSS** in your HTML head:
   ```html
   <link rel="stylesheet" href="/path/to/blog-admin.css">
   ```
3. **Include the HTML structure** where you want the blog admin to appear
4. **Include the JavaScript** at the end of your body:
   ```html
   <script src="/path/to/blog-admin.js"></script>
   ```

## Customization

### CSS Variables

The module uses CSS variables for easy customization. Modify the `:root` variables in `blog-admin.css`:

```css
:root {
    /* Primary Brand Colors */
    --color-bg-primary: #012928;
    --color-bg-secondary: #031815;
    --color-accent: #00ff97;
    --color-accent-dark: #007d42;
    
    /* Text Colors */
    --color-text-primary: #ffffff;
    --color-text-secondary: rgba(255, 255, 255, 0.7);
    
    /* Status Colors */
    --color-status-published-text: #4ade80;
    --color-status-draft-text: #9ca3af;
    --color-status-archived-text: #f87171;
    
    /* ... and more */
}
```

### API Configuration

To connect to your backend API, modify the `API_CONFIG` object in `blog-admin.js`:

```javascript
const API_CONFIG = {
    baseUrl: '/api/admin/blog-posts',  // Your API endpoint
    useMockData: false                // Set to false to use real API
};
```

## API Endpoints

The module expects the following API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/blog-posts` | Fetch all blog posts |
| POST | `/api/admin/blog-posts` | Create new blog post |
| PATCH | `/api/admin/blog-posts/:id` | Update blog post |
| DELETE | `/api/admin/blog-posts/:id` | Delete blog post |
| POST | `/api/admin/blog-posts/:id/toggle-visibility` | Toggle website visibility |

### Request/Response Format

#### Blog Post Object

```typescript
interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;              // HTML content
    excerpt: string | null;
    featured_image_url: string | null;
    featured_image_alt: string | null;
    author_name: string;
    category: string | null;
    tags: string[] | null;
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string[] | null;
    og_image_url: string | null;
    status: 'draft' | 'published' | 'archived';
    visible_on_website: boolean;
    published_at: string | null;
    created_at: string;
    updated_at: string;
}
```

## Features in Detail

### Rich Text Editor

The content editor supports HTML formatting with a toolbar that includes:
- **Bold**: `<strong>text</strong>`
- **Italic**: `<em>text</em>`
- **Heading**: `<h2>text</h2>`
- **Link**: `<a href="url">text</a>`
- **List**: `<ul><li>item</li></ul>`

### Categories

Predefined categories available:
- Mutual Funds
- Stock Market
- Insurance
- Fixed Deposits
- Loans
- Tax Planning
- Retirement Planning
- Investment Tips
- Market Analysis
- Financial Planning
- Other

### Status Management

Three status options:
- **Draft**: Not published, not visible on website
- **Published**: Published and visible on website (if enabled)
- **Archived**: Not visible, kept for reference

### Visibility Control

Each post has a visibility toggle that controls whether it appears on the public website, independent of its status.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Security Notes

- The module includes XSS protection via HTML escaping
- Always validate and sanitize data on the backend
- Implement proper authentication and authorization for API endpoints
- Use HTTPS in production

## Development

### Testing with Mock Data

By default, the module uses mock data. To test:

1. Open `blog-admin.html` in a browser
2. All CRUD operations will work with in-memory mock data
3. Changes are not persisted after page refresh

### Switching to Real API

1. Set `useMockData: false` in `API_CONFIG`
2. Ensure your API endpoints are accessible
3. Implement proper error handling on the backend
4. Add authentication headers if required

## Troubleshooting

### Posts not loading

- Check browser console for errors
- Verify API endpoints are accessible
- Ensure `API_CONFIG.baseUrl` is correct

### Styling issues

- Check that `blog-admin.css` is properly linked
- Verify no conflicting CSS from your existing styles
- Check browser compatibility

### Form not submitting

- Check browser console for JavaScript errors
- Verify API endpoint is accepting requests
- Check network tab in browser dev tools

## License

This module is part of the Stockstrail project.

## Support

For issues or questions, please contact the development team.
