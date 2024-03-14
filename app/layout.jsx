import "./globals.css";


export const metadata = {
  title: "Foodie",
  description: "A food business landing page made with NextJS and TailwindCSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-roboto">
      <body id="top" className="block bg-white text-sonic-silver text-[1.6rem] leading-[1.6] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}