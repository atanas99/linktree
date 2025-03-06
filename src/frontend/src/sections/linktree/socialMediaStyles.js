export const socialMediaLinks = [
  {
    name: "GitHub",
    color: "#333",
    icon: "mdi:github"
  },
  {
    name: "YouTube",
    color: "#FF0000",
    icon: "mdi:youtube"
  },
  {
    name: "Twitter",
    color: "#1DA1F2",
    icon: "mdi:twitter"
  },
  {
    name: "Facebook",
    color: "#1877F2",
    icon: "mdi:facebook"
  },
  {
    name: "Instagram",
    color: "#E4405F",
    icon: "mdi:instagram"
  },
  {
    name: "LinkedIn",
    color: "#0077B5",
    icon: "mdi:linkedin"
  },
  {
    name: "TikTok",
    color: "#000000",
    icon: "ic:baseline-tiktok"
  },
  {
    name: "Snapchat",
    color: "#FFFC00",
    icon: "mdi:snapchat"
  }
];


export const getIconByName = (name) => {
  const link = socialMediaLinks.find((link) => link.name === name);
  return link ? link.icon : null;
};

export const getColorByName = (name) => {
  const link = socialMediaLinks.find((link) => link.name === name);
  return link ? link.color : null;
}

