export const metadata = {
  title: "Tom Faulkner for Aldeburgh & Leiston",
  description:
    "Tom Faulkner, Conservative candidate for Aldeburgh & Leiston in the Suffolk County Council election.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
