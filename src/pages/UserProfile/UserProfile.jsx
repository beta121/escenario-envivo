import { useParams } from 'react-router-dom';
import { SellerStore } from '../../components/layout';
import { AboutProfileUser } from '../AboutProfileUser/AboutProfileUser';
import { sellersUsers } from '../../shared/mocks/sellersData';

export const UserProfile = () => {
  const { id } = useParams();

  const seller = sellersUsers.find((u) => Number(u.id) === Number(id));

  return <>{seller.store ? <SellerStore /> : <AboutProfileUser user={seller} />}</>;
};

export default UserProfile;
