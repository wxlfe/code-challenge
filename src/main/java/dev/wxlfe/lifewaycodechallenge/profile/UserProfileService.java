package dev.wxlfe.lifewaycodechallenge.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserProfileService {
    private final UserProfileDataAccessService userProfileDataAccessService;

    @Autowired
    public UserProfileService(UserProfileDataAccessService userProfileDataAccessService) {
        this.userProfileDataAccessService = userProfileDataAccessService;
    }

    List<UserProfile> getUserProfiles() {
        return userProfileDataAccessService.getUserProfiles();
    }

    UserProfile getUserProfile(String userProfileID) {
        return userProfileDataAccessService.getUserProfile(userProfileID);
    }

    void deleteUserProfile(String userProfileID) {
        userProfileDataAccessService.deleteUserProfile(userProfileID);
    }

    void addUserProfile(UserProfile userProfile) {
        userProfileDataAccessService.addUserProfile(userProfile);
    }

    void editUserProfile(UserProfile userProfile) {
        userProfileDataAccessService.editUserProfile(userProfile);
    }
}
