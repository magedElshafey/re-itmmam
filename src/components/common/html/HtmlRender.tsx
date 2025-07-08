import React from "react";
import { useLanguage } from "../../../store/LanguageProvider";
type HtmlRendererProps = {
  html: string;
};

const HtmlRenderer: React.FC<HtmlRendererProps> = ({ html }) => {
  const { language } = useLanguage();
  const removeFontFamily = (html: string) => {
    return html.replace(/font-family:[^;"]*;?/gi, "");
  };
  const sanitizedHtml = removeFontFamily(html);
  return (
    <div
      className={language === "ar" ? "font-arabic" : "font-english"}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default HtmlRenderer;
