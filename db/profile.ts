import { supabase } from "@/lib/supabase/browser-client";
import { TablesInsert, TablesUpdate } from "@/supabase/types";

export const getProfileByUserId = async (userId: string) => {
  // Fetch all profiles for this user.
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  // If no profile exists, create a default profile.
  if (!profiles || profiles.length === 0) {
    const defaultProfile: TablesInsert<"profiles"> = {
      user_id: userId,
      username: "default_username", // Adjust as needed.
      bio: "",
      display_name: "",
      image_path: "",
      image_url: "",
      profile_context: "",
      use_azure_openai: false
    };

    const { data: createdProfiles, error: createError } = await supabase
      .from("profiles")
      .insert([defaultProfile])
      .select("*");

    if (createError) {
      throw new Error(createError.message);
    }
    if (!createdProfiles || createdProfiles.length !== 1) {
      throw new Error("Failed to create a unique profile.");
    }
    return createdProfiles[0];
  }

  // If more than one profile exists, log a warning and return the first one.
  if (profiles.length > 1) {
    console.warn("Multiple profiles found for user, returning the first one.");
  }

  return profiles[0];
};

export const getProfilesByUserId = async (userId: string) => {
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return profiles;
};

export const createProfile = async (profile: TablesInsert<"profiles">) => {
  const { data: createdProfiles, error } = await supabase
    .from("profiles")
    .insert([profile])
    .select("*");

  if (error) {
    throw new Error(error.message);
  }
  if (!createdProfiles || createdProfiles.length !== 1) {
    throw new Error("Profile creation did not return exactly one row.");
  }

  return createdProfiles[0];
};

export const updateProfile = async (
  profileId: string,
  profile: TablesUpdate<"profiles">
) => {
  const { data: updatedProfiles, error } = await supabase
    .from("profiles")
    .update(profile)
    .eq("id", profileId)
    .select("*");

  if (error) {
    throw new Error(error.message);
  }
  if (!updatedProfiles || updatedProfiles.length !== 1) {
    throw new Error("Profile update did not return exactly one row.");
  }

  return updatedProfiles[0];
};

export const deleteProfile = async (profileId: string) => {
  const { error } = await supabase
    .from("profiles")
    .delete()
    .eq("id", profileId);

  if (error) {
    throw new Error(error.message);
  }

  return true;
};
