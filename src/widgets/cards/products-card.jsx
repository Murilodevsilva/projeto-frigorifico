import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

 function ProductCard({ img, title, id }) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Avatar
        src={img}
        alt={title}
        size="xxl"
        className="h-full w-full shadow-lg shadow-gray-500/25"
      />
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
        {title}
      </Typography>
    </Card>
  );
}
ProdCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired

};

ProdCard.displayName = "/src/widgets/layout/product-card.jsx";

export default ProductCard;
