package dev.wxlfe.codechallenge.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserProfileController {

    private final UserProfileService userProfileService;

    @Autowired
    public UserProfileController(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    @GetMapping(value="/api/v1/user-profile")
    public List<UserProfile> getUserProfiles() {
        return userProfileService.getUserProfiles();
    }

    @GetMapping(value="/api/v1/user-profile/{userProfileID}")
    public UserProfile getUserProfile(@PathVariable String userProfileID) {
        return userProfileService.getUserProfile(userProfileID);
    }

    @DeleteMapping(value="/api/v1/user-profile/{userProfileID}")
    public void deleteUserProfile(@PathVariable String userProfileID) {
        userProfileService.deleteUserProfile(userProfileID);
    }

    @PostMapping(value="/api/v1/user-profile/{userProfileID}+{username}+{email}+{phone}")
    public void addUserProfile(@PathVariable String userProfileID, @PathVariable String username, @PathVariable String email, @PathVariable String phone) {
        UserProfile userProfile = new UserProfile(userProfileID, username, email, phone);
        userProfileService.addUserProfile(userProfile);
    }

    @PostMapping(value="/api/v1/user-profile/edit/{userProfileID}+{username}+{email}+{phone}")
    public void editUserProfile(@PathVariable String userProfileID, @PathVariable String username, @PathVariable String email, @PathVariable String phone) {
        UserProfile userProfile = new UserProfile(userProfileID, username, email, phone);
        userProfileService.editUserProfile(userProfile);
    }
}
