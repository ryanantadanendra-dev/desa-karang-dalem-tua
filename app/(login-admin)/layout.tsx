import "../globals.css";

export default async function LoginLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`overflow-x-hidden h-full antialiased scroll-smooth`}
    >
      <body className="h-full w-full flex flex-col justify-center items-center">
        {children}
      </body>
    </html>
  );
}
