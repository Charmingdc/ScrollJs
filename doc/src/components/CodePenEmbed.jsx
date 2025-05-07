import { useEffect } from 'react';

const CodePenEmbed = ({ slugHash, title, height = 540, editable = false }) => {
  useEffect(() => {
    const scriptId = 'codepen-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  const editableParam = editable ? 'true' : 'false';

  return (
    <div style={{ margin: '1.5rem 0' }}>
      <iframe
        height={height}
        style={{ width: '100%' }}
        scrolling="no"
        title={title}
        src={`https://codepen.io/Charmingdc/embed/${slugHash}?default-tab=html&editable=${editableParam}&theme-id=dark`}
        frameBorder="no"
        loading="lazy"
        allowTransparency="true"
        allowFullScreen={true}
      >
        See the Pen <a href={`https://codepen.io/Charmingdc/pen/${slugHash}`}>{title}</a> by Charmingdc (
        <a href="https://codepen.io/Charmingdc">@Charmingdc</a>) on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
  );
};

export default CodePenEmbed;