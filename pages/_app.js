import { FaLink } from 'react-icons/fa';

// The function to handle the button click and copy the link to the clipboard
function copyToClipboard() {
    const currentPath = window.location.pathname;
    const shareLink = `https://slayte.com/guide/?article=${currentPath}`;

    const textArea = document.createElement('textarea');
    textArea.value = shareLink;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    alert('Link copied to clipboard!');
}

// Share Article Button component with the icon
function ShareArticleButton() {
  return (
    <button onClick={copyToClipboard} style={{ backgroundColor: 'transparent', border: 'none' }}>
      <FaLink />
    </button>
  );
}

// The main application component
function MyApp({ Component, pageProps }) {
  // Placeholder for the article title. Replace {articleTitle} with the actual title source.
  const articleTitle = "Sample Article Title";  // You'll want to source this from the correct location

  return (
    <>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ marginRight: '10px' }}>{articleTitle}</h1>
          <ShareArticleButton />
        </div>

        {/* The main page content */}
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
