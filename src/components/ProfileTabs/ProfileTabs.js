import React from "react";
import "./ProfileTabs.css";

const ProfileTabs = () => {
  const profiles = [
    { id: 1, initials: "CB", name: "Cheyenne Bergson" },
    { id: 2, initials: "CB", name: "Jonathan Higgins" },
    { id: 3, initials: "CB", name: "Capt. Trunk" },
    { id: 4, initials: "CB", name: "Hannibal Smith" },
    { id: 5, initials: "CB", name: "Capt. Trunk" },
    { id: 6, initials: "CB", name: "Hannibal Smith", notificationCount: 2 },
  ];


  <div className="profile-tabs-container">
      <div className="profile-tabs">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-tab">
            <div className="profile-initials">{profile.initials}</div>
            <div className="profile-name">{profile.name}</div>
            {profile.notificationCount && (
              <div className="notification-badge">{profile.notificationCount}</div>
            )}
          </div>
        ))}
      </div>
      <li className="messaging-button">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.95833 20.195C4.81708 20.1974 4.67734 20.1656 4.55105 20.1023C4.42477 20.039 4.31569 19.946 4.23314 19.8314C4.1506 19.7168 4.09704 19.5838 4.07705 19.444C4.05705 19.3041 4.07121 19.1615 4.11833 19.0283L5.57666 14.2217C5.27842 13.4023 5.12065 12.5385 5.10999 11.6667C5.10769 10.6603 5.31013 9.664 5.70499 8.73834C6.18366 7.59831 6.93465 6.59309 7.89212 5.81077C8.8496 5.02845 9.98434 4.49292 11.1969 4.25109C12.4095 4.00927 13.6628 4.06855 14.8472 4.42373C16.0315 4.77891 17.1106 5.41915 17.99 6.28834C18.6724 6.9816 19.2185 7.79684 19.6 8.69167C19.9876 9.61521 20.1872 10.6068 20.1872 11.6083C20.1872 12.6099 19.9876 13.6015 19.6 14.525C19.2185 15.4198 18.6724 16.2351 17.99 16.9283C16.967 17.9496 15.6726 18.6561 14.2603 18.9642C12.8481 19.2723 11.3771 19.169 10.0217 18.6667L5.21499 20.16C5.13139 20.1831 5.04506 20.1949 4.95833 20.195ZM12.6467 5.83334C11.873 5.83109 11.107 5.98588 10.395 6.28834C9.0156 6.87047 7.91285 7.96069 7.31499 9.33334C7.01498 10.0482 6.86046 10.8156 6.86046 11.5908C6.86046 12.3661 7.01498 13.1335 7.31499 13.8483C7.3845 14.0406 7.3845 14.2511 7.31499 14.4433L6.24166 17.9433L9.74166 16.87C9.9339 16.8005 10.1444 16.8005 10.3367 16.87C11.7533 17.4583 13.3447 17.465 14.7662 16.8885C16.1877 16.3121 17.3249 15.1989 17.9317 13.79C18.273 12.9173 18.3992 11.9753 18.2994 11.0435C18.1996 10.1118 17.8768 9.21784 17.3583 8.43728C16.8399 7.65672 16.141 7.01255 15.3208 6.55929C14.5007 6.10603 13.5834 5.85702 12.6467 5.83334Z" fill="white"/>
<path d="M23.0416 23.9167C22.9564 23.9281 22.8701 23.9281 22.7849 23.9167L17.9783 22.4583C16.1725 23.1402 14.1731 23.0986 12.3973 22.3421C10.6214 21.5857 9.20611 20.1729 8.44661 18.3983C8.3947 18.2933 8.365 18.1787 8.35938 18.0617C8.35376 17.9447 8.37233 17.8278 8.41394 17.7184C8.45555 17.6089 8.5193 17.5091 8.6012 17.4254C8.6831 17.3416 8.7814 17.2757 8.88994 17.2317C8.9955 17.1831 9.10966 17.1561 9.22577 17.1522C9.34188 17.1483 9.45762 17.1675 9.56622 17.2088C9.67481 17.25 9.77411 17.3125 9.85831 17.3926C9.9425 17.4726 10.0099 17.5686 10.0566 17.675C10.3339 18.3359 10.7293 18.9408 11.2233 19.46C12.0413 20.269 13.0803 20.8181 14.2096 21.0382C15.3389 21.2582 16.508 21.1394 17.5699 20.6967C17.7622 20.6272 17.9727 20.6272 18.1649 20.6967L21.6649 21.77L20.5916 18.27C20.5221 18.0778 20.5221 17.8672 20.5916 17.675C20.8941 16.963 21.0489 16.1969 21.0466 15.4233C21.0494 14.6628 20.9013 13.9093 20.6109 13.2064C20.3205 12.5035 19.8936 11.8652 19.3549 11.3283C19.1189 11.0301 18.8574 10.7529 18.5733 10.5C18.4713 10.4388 18.3828 10.3574 18.3133 10.2609C18.2438 10.1644 18.1947 10.0546 18.1691 9.93849C18.1434 9.82234 18.1417 9.70217 18.164 9.58533C18.1864 9.46849 18.2323 9.35743 18.299 9.25895C18.3657 9.16046 18.4518 9.07661 18.5521 9.01252C18.6523 8.94844 18.7645 8.90546 18.8819 8.88621C18.9993 8.86697 19.1194 8.87186 19.2348 8.9006C19.3502 8.92933 19.4586 8.9813 19.5533 9.05333C19.9706 9.32273 20.3613 9.63135 20.7199 9.975C21.4061 10.6652 21.9527 11.4812 22.3299 12.3783C22.7257 13.3078 22.9282 14.3081 22.9249 15.3183C22.9225 16.2137 22.7646 17.1019 22.4583 17.9433L23.9166 22.75C23.9637 22.8832 23.9779 23.0258 23.9579 23.1656C23.9379 23.3055 23.8843 23.4384 23.8018 23.5531C23.7192 23.6677 23.6102 23.7607 23.4839 23.824C23.3576 23.8873 23.2179 23.9191 23.0766 23.9167H23.0416Z" fill="white"/>
</svg><span className="message">Messaging</span></li>
    </div>
    

}


export default ProfileTabs

