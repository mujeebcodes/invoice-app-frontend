import { User } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import LoadingButton from "../LoadingButton";
import { Button } from "../ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().optional(),
  street: z.string().min(1, "street is required"),
  city: z.string().min(1, "city is required"),
  postCode: z.string().min(1, "postCode is required"),
  country: z.string().min(1, "country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (userProfileData: UserFormData) => void;
  currentUser: User;
  isLoadingUser: boolean;
  isUpdatingUser: boolean;
};

const UserProfileForm = ({ onSave, currentUser, isUpdatingUser }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...currentUser },
  });

  const handleUpdate = (userProfileData: UserFormData) => {
    onSave(userProfileData);
    setIsEditing(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleUpdate)}
        className="p-4 space-y-4 rounded-lg md:p-10 lg:w-3/5 mt-28"
      >
        <div>
          <Button className="space-x-2 mb-4">
            <MoveLeft />
            <Link to="/invoices">Back</Link>
          </Button>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <FormDescription>
            View and Change your profile information
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} disabled={!isEditing} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street</FormLabel>
              <FormControl>
                <Input {...field} disabled={!isEditing} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="postCode"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Post Code</FormLabel>
                <FormControl>
                  <Input {...field} disabled={!isEditing} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} disabled={!isEditing} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} disabled={!isEditing} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {!isEditing && (
          <Button
            onClick={() => setIsEditing(true)}
            className="bg-purple text-white"
          >
            Edit Profile
          </Button>
        )}

        {isEditing && (
          <>
            {isUpdatingUser ? (
              <LoadingButton />
            ) : (
              <Button type="submit" className="bg-green-500 text-white">
                Submit
              </Button>
            )}
          </>
        )}
      </form>
    </Form>
  );
};
export default UserProfileForm;
