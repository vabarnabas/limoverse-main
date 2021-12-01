import { toast } from 'react-hot-toast'

export const getToken = (email) => {
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
        
    })
}