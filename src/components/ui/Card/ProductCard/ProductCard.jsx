import { ShowCard, DefaultCard, DiscountCard, GiveawayCard } from '../../Card';

export const ProductCard = ({ product, onClick }) => {
  const CARD_VARIANTS = {
    default: DefaultCard,
    discount: DiscountCard,
    auction: DiscountCard,
    giveaway: GiveawayCard,
    'showing-now': ShowCard,
  };

  const typeKey = product.type?.toLowerCase() || 'default';
  const Component = CARD_VARIANTS[typeKey] || CARD_VARIANTS.default;

  return <Component {...product} onClick={onClick} />;
};
