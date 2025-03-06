import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-scroll";

function PrivacyPolicy() {
  const [policyContent, setPolicyContent] = useState("");
  const [tableOfContents, setTableOfContents] = useState([]);

  useEffect(() => {
    fetch("/privacy-policy-for-safely360.md")
      .then((response) => response.text())
      .then((text) => {
        setPolicyContent(text);
        generateTableOfContents(text);
      })
      .catch((error) => console.error("Error fetching privacy policy:", error));
  }, []);

  const generateTableOfContents = (content) => {
    const headings = content.match(/^#{1,2}\s+(.*)$/gm) || [];
    const toc = headings.map((heading) => {
      const level = heading.match(/^#+/)[0].length;
      const title = heading.replace(/^#+\s+/, "");
      return { level, title, id: title.toLowerCase().replace(/\s+/g, "-") };
    });
    setTableOfContents(toc);
  };

  const customRenderers = {
    h1: ({ node, ...props }) => (
      <h1
        id={props.children.toLowerCase().replace(/\s+/g, "-")}
        className="text-4xl font-bold mb-6 mt-12 border-b pb-2"
        {...props}
      />
    ),
    h2: ({ node, ...props }) => (
      <h2
        id={props.children.toLowerCase().replace(/\s+/g, "-")}
        className="text-3xl font-semibold mb-4 mt-8"
        {...props}
      />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="text-2xl font-medium mb-3 mt-6" {...props} />
    ),
    p: ({ node, ...props }) => (
      <p className="mb-4 leading-relaxed" {...props} />
    ),
    ul: ({ node, ...props }) => (
      <ul className="list-disc list-inside mb-4 pl-4" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal list-inside mb-4 pl-4" {...props} />
    ),
    li: ({ node, ...props }) => <li className="mb-2" {...props} />,
    a: ({ node, ...props }) => (
      <a className="text-primary hover:underline" {...props} />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote
        className="border-l-4 border-primary pl-4 italic my-4"
        {...props}
      />
    ),
    code: ({ node, ...props }) => (
      <code className="bg-base-200 rounded px-1 py-0.5" {...props} />
    ),
    pre: ({ node, ...props }) => (
      <pre
        className="bg-base-200 rounded p-4 mb-4 overflow-x-auto"
        {...props}
      />
    ),
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-bold mb-8 text-center mt-8">
        Privacy Policy
      </h1>

      <div className="bg-base-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <nav>
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li
                key={index}
                className={`${item.level === 1 ? "font-semibold" : "pl-4"}`}
              >
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={customRenderers}>
          {policyContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
