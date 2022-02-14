package dev.wxlfe.codechallenge.profile;

import java.util.Objects;

public class UserProfile {
    private String userProfileID;
    private String username;
    private String email;
    private String phone;

    public UserProfile(String userProfileID, String username, String email, String phone) {
        this.userProfileID = userProfileID;
        this.username = username;
        this.email = email;
        this.phone = phone;
    }

    public String getUserProfileID() {
        return userProfileID;
    }

    public void setUserProfileID(String userProfileID) {
        this.userProfileID = userProfileID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProfile that = (UserProfile) o;
        return Objects.equals(userProfileID, that.userProfileID) && Objects.equals(username, that.username) && Objects.equals(email, that.email) && Objects.equals(phone, that.phone);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userProfileID, username, email, phone);
    }
}
