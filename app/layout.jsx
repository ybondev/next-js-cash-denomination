import "bootstrap/dist/css/bootstrap.min.css";
import "@public/assets/styles.css";

export const metadata = {
  title: "Cash Breakdown",
  description: "Cash Breakdown Domination Pieces Amount",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default layout;
