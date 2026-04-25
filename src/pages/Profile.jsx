import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileCard from "../components/cards/ProfileCard";
import ProfileMenuItem from "../components/ProfileMenuItem";
import { checkForUpdate } from "../utils/checkUpdate";

export default function Profile() {

  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [latestVersion, setLatestVersion] = useState("");

  useEffect(() => {
    async function runCheck() {
      const result = await checkForUpdate();

      if (result.updateAvailable) {
        setUpdateAvailable(true);
        setLatestVersion(result.latest);
      }
    }

    runCheck();
  }, []);

  const handleUpdate = () => {
    window.location.reload(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#847b64ff" }}>
      <ProfileHeader />

      <div style={{ padding: 16, marginTop: -60 }}>
        <ProfileCard />

        {/* 🔥 UPDATE BANNER (ONLY SHOWS IF UPDATE EXISTS) */}
        {updateAvailable && (
          <div
            onClick={handleUpdate}
            style={{
              padding: 14,
              marginBottom: 12,
              background: "#e63946",
              color: "white",
              borderRadius: 10,
              textAlign: "center",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            ⬆️ Update Available — Click to Reload
            <div style={{ fontSize: 12 }}>
              Version: {latestVersion.slice(0, 7)}
            </div>
          </div>
        )}

        <ProfileMenuItem
          icon="⚙️"
          title="Profile Settings"
          subtitle="Update and modify your profile"
        />

        <ProfileMenuItem
          icon="🔒"
          title="Privacy"
          subtitle="Change your password"
        />

        <ProfileMenuItem
          icon="🔔"
          title="Notifications"
          subtitle="Change notification settings"
        />

        <ProfileMenuItem
          icon="💼"
          title="Themes"
          subtitle="Update and modify your theme"
        />

        <ProfileMenuItem
          icon="🗝️"
          title="ID"
          subtitle="Change or Close ID"
        />

        <ProfileMenuItem
          icon="🚪"
          title="Logout"
          subtitle="Change notification settings"
        />
      </div>
    </div>
  );
}