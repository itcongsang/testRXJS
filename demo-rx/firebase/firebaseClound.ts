import admin from 'firebase-admin';


    const firebaseConfig = {
    "type": "service_account",
    "project_id": "demosharp-4d601",
    "private_key_id": "8e27a47fb6fdbd7e09908d9b2b7a1f5ecb04aee1",
    "private_key": "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCag64xg3U183hr\nm7s4ZGyZlE6ajBgA2mKThH/svtzHmTe9mBCSO2AQUwiKWEp7B/friRR2qrW5S14D\nmlR6R3a3pmYLw6NNQ8B/NfZodOs2+7ZfJgqK52Cpr01Z6FBLH62R26Za8CepEmbd\nEymvAC448n5npq0l8TBNyMONqjNd7lXa1ui3+OzdCmKdyHChIBfd5bCeOaCt3eyq\nDpZxGykMox/hUrYQ+cAVWz6UaonUUsomjubwYw8MQ4ziFSIoooTqqFYhwXZ/gqCN\nrAJ9muFJMmlEIYdvIqsvUgYdP7L8uTxdDAkzgs953Z/pVtBk/gndNkZdTr5WIGBQ\nrQF3R2G5AgMBAAECggEAExusaRchYaClsw5j4soYhrhJLYzxqE6u2Mtj/o/D7Ih4\nKjbUpcuN9QwvsYbQVH1cctZVn4SQ9e8/cHafcoJv81oyoyB4i3o7eKqLDx6WZWBP\njLNpo6/ldlaQMZ7XKdMrEISiAqZRtp499k0DtKPzE2Z5rLEiFzUdN3atKFHKCcLZ\npA6IMBu8WR5cIgPUk+O+QZUa4uNAn0wj3/zDyjPfvAJLQrsWLkmwJ4M1uHJHzpE8\n0VRc6/DM7L6wsoZUPPCvDozU+WRgNqSQ3acvCUp71IulZvcCgx/hA0QbsUpqtv49\nIrfhOzZZ3DGh97RdNgBAdeun1G+d9HP3gYki9xRBuQKBgQDX1lTxoMAHhBYKGC0D\nbFm/dVOB2RVqZM35ovYxBGSejPy2YJkWdmltmVe8GdG91u7CiJEJdKUqWLKOH6yz\nHjCfgNeugEYFb/JmyHuZLFQX1MmDE+uP8+lT5rbRz5nO9xo601HIigUODAem3wZa\nxjA+5YW9Yhe67jA3D9ERLxlQEwKBgQC3RCj3k2x5IBjXclcjbamzvIx7doHUXsUY\nBbTSHZwCmFmYXcIUueGB2QEMkOBCVD4KMHmHpF8AIhGnsGRjOrjyAlHBGosJcfaK\nRHYHIYLvTiSnBEAHH4E6YI5D/URO/kivl8MZNRNhMtkKyrrw5wHP6SKMz5m9uTPn\nzN+WO1v4gwKBgBTi8tlnGu4fRBq5+DEqnQzAB9K69S2Uj7ImqPhZWntVXWcwtd/M\nmas3eZwES525XOWKXa6ykQEmEDFcs1OqCj6FM1n5o80G5kg4Am3yMjkUKGP824DU\ns7Gg0/Q9yL6Ufv9OT82+PXr8gwkM8Ap8v1J215haE73NKvFJIIwvKJ3tAoGAHozp\nO2RDB+oW2guAhTJpwMGktYwq1mk59+gznXc8I56cCO9QRD48XnX7W8nm6Ie8k9xC\n1h7Li20ifk7EXVpTrFxAnq07EkcCL0h8WHH4rsXbDFCED+vrkfy4mpLkyTpQiZ0F\n8/TKF0Dvt4HWKgSIY81cahbNbTgrc+/OMfARQ9sCgYBVcJW7gLW1/QiJMG6pHCI6\nQJC+LY0o+UsjSLkY9XikVMNdlM6BaC8wfCDdq72brCZD7l7Cmh/QmPs9UGU+Q/uu\nxyZsIiyiF/54MNaDOQJXvnjpdQ1T2qnF+9Wp8iHNn5fmUwlL0TYQw4pvU+bjp6/l\nW1Eqhjf+e+gc1UrK8rhYVw==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-uaeun@demosharp-4d601.iam.gserviceaccount.com",
    "client_id": "106516006085740977415",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uaeun%40demosharp-4d601.iam.gserviceaccount.com"
  };

  const key_fire=JSON.stringify(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert(key_fire),
});

let db = admin.firestore();

export {
    db
}