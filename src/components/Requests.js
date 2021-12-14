import { toast } from 'react-hot-toast';

export const fetchToken = (email) => {
    fetch('https://java-eu01.vulog.com/auth/realms/MOL-HUBUD/protocol/openid-connect/token', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',    
        },
        body: 'username=' + email + '&client_secret=69f1286c-6466-4d92-bc2b-1d67c1bda9c5&grant_type=password&client_id=MOL-HUBUD_secure&password=' + localStorage.getItem('vulogPassword')
    }).then(res => {
        if (res.ok) {
            toast.success('Token sikeresen generálva!',{
                style: {
                    borderRadius: '10px',
                    background: '#282828',
                    color: '#fff',
                    padding: '0.5rem 1.25rem'
                },
            })
        } else {
            localStorage.removeItem('vulogPassword');
            toast.error('Hiba lépett fel a generálás során! Kérlek javítsd a jelszavad, vagy próbálkozz újra később!',{
                style: {
                    borderRadius: '10px',
                    background: '#282828',
                    color: '#fff',
                    padding: '0.5rem 1.25rem'
            },
        })
        }
        return res.json()
    })
    .then(data => {
        sessionStorage.setItem('accessToken', data.access_token);
    })
}

export const fetchUserData = async (userId) => {
    return await fetch('https://java-eu01.vulog.com/boapi/proxy/user/fleets/MOL-HUBUD/users/' + userId, {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
            'x-api-key': '5d0d457a-2832-4330-9536-504cda55ef46',
        },
    }).then(res => {
        if (res.ok) {
            toast.success('Token sikeresen generálva!',{
                style: {
                    borderRadius: '10px',
                    background: '#282828',
                    color: '#fff',
                    padding: '0.5rem 1.25rem'
                },
            })
        } else {
            toast.error('Hiba lépett fel a generálás során! Kérlek javítsd a jelszavad, vagy próbálkozz újra később!',{
                style: {
                    borderRadius: '10px',
                    background: '#282828',
                    color: '#fff',
                    padding: '0.5rem 1.25rem'
            },
        })
    }
    return res.json().then(data => {return data});
    })
}