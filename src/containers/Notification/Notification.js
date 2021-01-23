import firebase from 'firebase';
import { useEffect, useState } from 'react';
import { useUser } from './../../hooks/useUser';
import Notific from './Notific/Notific';

const Notification = () => {

    const user = useUser();
    const [notifications, setNotifications] = useState([])

    useEffect(() => {

        const database = firebase.database();

        database.ref('/users/' + user.uid + '/notifications').orderByChild('created_at').on('value', snapshot => {
            const notificationArray = [];
            const notificationResponse = snapshot.val();

            setNotifications([]);

            if (notificationResponse) {
                Object.keys(notificationResponse).forEach(key => {
                    const notific = {
                        id: key,
                        ...notificationResponse[key]
                    }
                    notificationArray.push(notific)
                });
                const notificRevArray = notificationArray.reverse()
                setNotifications(notificRevArray);
            }
        })
    }, [])
    return (
        <div>
            {
                notifications.length > 0 ?
                    notifications.map(noti => <Notific key={noti.id} notific={noti} />) :
                    <div className="m-4 p-5 max-w-2xl font-semibold text-2xl rounded-md shadow-md bg-gray-800 text-gray-300">
                        Please wait. fetching data ...
                    </div>

            }
        </div>

    )
}

export default Notification
