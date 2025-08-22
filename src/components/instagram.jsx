import { useEffect } from "react";

export default function InstagramEmbed({ url }) {
  useEffect(() => {
    const scriptId = "instagram-embed-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
    } else {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow:
          "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "1920px",
        minWidth: "326px",
        padding: 0,
        width: "100%",
      }}
    ></blockquote>
  );
}
