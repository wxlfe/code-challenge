package dev.wxlfe.lifewaycodechallenge.datastore;

import dev.wxlfe.lifewaycodechallenge.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class FakeUserProfileDataStore {
    private static List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        USER_PROFILES.add(new UserProfile("@alice", "Alice", "alice@example.com", "5555555555"));
        USER_PROFILES.add(new UserProfile("@bob", "Bob", "bob@example.com", "1234567890"));
    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }

    public UserProfile getUserProfile(String userProfileID) {
        for (int i = 0; i < USER_PROFILES.size(); i++) {
            if (USER_PROFILES.get(i).getUserProfileID().equals(userProfileID)) {
                return USER_PROFILES.get(i);
            }
        }
        return new UserProfile("", "", "", "");
    }

    public void addUserProfile(UserProfile userProfile) {
        USER_PROFILES.add(userProfile);
    }

    public void deleteUserProfile(String userProfileID) {
        for (int i = 0; i < USER_PROFILES.size(); i++) {
            if (USER_PROFILES.get(i).getUserProfileID().equals(userProfileID)) {
                USER_PROFILES.remove(i);
            }
        }
    }

    public void editUserProfile(UserProfile userProfile) {
        for (int i = 0; i < USER_PROFILES.size(); i++) {
            if (USER_PROFILES.get(i).getUserProfileID().equals(userProfile.getUserProfileID())) {
                USER_PROFILES.remove(i);
                USER_PROFILES.add(userProfile);
            }
        }
    }
}
