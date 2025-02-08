// /app/layout.tsx

export const metadata = {
    title: "Marium Studio",
    description: "Studio description",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>; 
  }
  