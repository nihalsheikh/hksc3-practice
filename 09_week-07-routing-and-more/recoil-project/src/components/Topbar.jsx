import { FaHome, FaSuitcase } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { RiMessage2Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import {
  jobAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
  totalNotificationCountSelector,
} from "../store/atom";

import { useRecoilValue } from "recoil";

const Topbar = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobAtom);
  const messageNotficationCount = useRecoilValue(messageAtom);
  const notficationCount = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationCountSelector)

  return (
    <nav>
      <button className="element">
        <div>
          <FaHome />
        </div>
        <p>Home</p>
      </button>
      <button className="element">
        <div>
          <HiUsers />{" "}
          {networkNotificationCount >= 100
            ? "99+"
            : `${networkNotificationCount}`}
        </div>
        <p>My Networks</p>
      </button>
      <button className="element">
        <div>
          <FaSuitcase />
          {jobNotificationCount >= 100 ? "99+" : `${jobNotificationCount}`}
        </div>
        <p>Jobs</p>
      </button>
      <button className="element">
        <div>
          <RiMessage2Fill />
          {messageNotficationCount >= 100
            ? "99+"
            : `${messageNotficationCount}`}
        </div>
        <p>Messages</p>
      </button>
      <button className="element">
        <div>
          <IoNotifications />
          {notficationCount >= 100 ? "99+" : `${notficationCount}`}
        </div>
        <p>Notifications</p>
      </button>
      <button className="element">
        <div>
          <CgProfile />
          {totalNotificationCount}
        </div>
        <p>Me</p>
      </button>
    </nav>
  );
};

export default Topbar;
