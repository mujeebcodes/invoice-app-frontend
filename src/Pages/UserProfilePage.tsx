import { useGetCurrentUser, useUpdateCurrentUser } from "@/api/UserApi";
import UserProfileForm from "@/components/forms/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isLoadingUser } = useGetCurrentUser();
  const { updateUser, isLoading: isUpdatingUser } = useUpdateCurrentUser();
  console.log(currentUser);

  if (!currentUser) {
    return <p>Loading ...</p>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isUpdatingUser={isUpdatingUser}
      isLoadingUser={isLoadingUser}
    />
  );
};
export default UserProfilePage;
