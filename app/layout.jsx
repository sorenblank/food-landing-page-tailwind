import "./globals.css";


export const metadata = {
  title: "Foodie",
  description: "A food business landing page made with NextJS and TailwindCSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body id="top" className="">
        {children}
      </body>
    </html>
  );
}