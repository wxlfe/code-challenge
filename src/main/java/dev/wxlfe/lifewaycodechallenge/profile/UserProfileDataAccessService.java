package dev.wxlfe.lifewaycodechallenge.profile;

import dev.wxlfe.lifewaycodechallenge.datastore.FakeUserProfileDataStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserProfileDataAccessService {
    private final FakeUserProfileDataStore fakeUserProfileDataStore;

    @Autowired
    public UserProfileDataAccessService(FakeUserProfileDataStore fakeUserProfileDataStore) {
        this.fakeUserProfileDataStore = fakeUserProfileDataStore;
    }

    List<UserProfile> getUserProfiles() {
        return fakeUserProfileDataStore.getUserProfiles();
    }

    UserProfile getUserProfile(String userProfileID) {
        return fakeUserProfileDataStore.getUserProfile(userProfileID);
    }

    void deleteUserProfile(String userProfileID) {
        fakeUserProfileDataStore.deleteUserProfile(userProfileID);
    }

    void addUserProfile(UserProfile userProfile) {
        fakeUserProfileDataStore.addUserProfile(userProfile);
    }

    void editUserProfile(UserProfile userProfile) {
        fakeUserProfileDataStore.editUserProfile(userProfile);
    }
}
