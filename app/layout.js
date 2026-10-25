import "./globals.css";
export const metadata = {
  title: "Vantaa yhdessä ry | Yhdessä olemme enemmän",
  description:
    "Yhteisöllisyyttä, harrastuksia ja tukea arkeen Vantaalla. Tutustu Vantaa yhdessä ry:n toimintaan.",
};
export default function Layout({ children }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
