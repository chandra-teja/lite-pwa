import { openDB, deleteDB, wrap, unwrap } from "idb";

const dynamic = "dynamic-v1";
const static = "static-v1";
self.addEventListener("install", function (event) {
  console.log(event, "Installed Service Worker");
  caches.open(static).then((cache) => {
    cache.add("/Images/L-icon-16.png");
    cache.add("/Images/L-icon-512.png");
  });
});

self.addEventListener("activate", function (event) {
  console.log("[Service Worker] Activating Service Worker ....", event);
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((res) => {
        if (res) {
          return res;
        } else {
          return fetch(event.request)
            // .then((res) => {
            //   return caches
            //     .open(dynamic)
            //     .then((cache) => {
            //       cache.put(event.request.url, res.clone());
            //       return res;
            //     })
            //     .catch((err) => {});
            // })
            // .catch((err) => {});
        }
      })
      .catch((err) => {})
  );
});

self.addEventListener("sync", (event) => {
  if (event.tag === "profileUpdate") {
    event.waitUntil(saveUserdetails());
  }
});

async function getData(key) {
    const dbPromise = openDB('profile', 1, {
        upgrade(db) {
          db.createObjectStore('info');
        },
      });
        return (await dbPromise).get('info', key);
}
async function getkeys() {
    const dbPromise = openDB('profile', 1, {
        upgrade(db) {
          db.createObjectStore('info');
        },
      });
        return (await dbPromise).getAllKeys('info');
}

function saveUserdetails() {
    getkeys()
    .then((key)=>console.log(key))
    .catch(err)
    getData('info').then((data)=>{
        console.log(data)
        const searchtag = mobileNumber;
        let user = {
          name: nameValue,
          address: addressValue,
          image: imageValue,
        };
        console.log(JSON.stringify(user));
        const api = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        axios
          .put(`http://localhost:8000/profilePage/${searchtag}`, user, {
            headers: api,
          })
    })
    .then((result) => {
      console.log(result);
      Promise.resolve();
    })
    .catch((err) => Promise.reject());
}
