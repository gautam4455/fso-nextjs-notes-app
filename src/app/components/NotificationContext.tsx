"use client";

import { createContext, useContext, useState } from "react";

type NotificationType = "success" | "error";

type NotificationContentType = {
  message: string;
  type: NotificationType;
  showNotification: (message: string, type?: NotificationType) => void;
};
const NotificationContent = createContext<NotificationContentType>({
  message: "",
  type: "success",
  showNotification: () => {},
});

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState<NotificationType>("success");

  const showNotification = (
    msg: string,
    notifType: NotificationType = "success",
  ) => {
    setMessage(msg);
    setType(notifType);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <NotificationContent value={{ message, type, showNotification }}>
      {children}
    </NotificationContent>
  );
};

export const useNotification = () => useContext(NotificationContent);
