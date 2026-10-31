export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/login"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/dashboard/", "/login"],
      },
    ],
    sitemap: `https://karangdalemtua.org/sitemap.xml`,
  };
}
