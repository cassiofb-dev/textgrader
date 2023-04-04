import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const About = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch("/README.md").then((response) => {
            response.text().then((text) => {
                setContent(text);
            });
        });
    }, []);

    return (
        <div style={{ padding: "16px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} skipHtml={false} />
        </div>
    )
}

export default About;