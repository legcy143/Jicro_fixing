import { create } from 'zustand';
import axios from "axios"
import IP from '../../constants/IP';
import { getData } from '../../helper/LocalStorage';
import { getCurrentPostiton } from './../../helper/Location';
import { messagePopup } from '../../helper/Message';
const url = IP.local
const useFetch = create(
    (set) => ({
        data: {}, // Profile ~ Data [Service Provider's]
        c_data: {}, //
        sc_data: {}, // 
        serviceData: {},
        ordersData: [],
        bookingsData: {},
        allServicesData: {},
        searchData: {},
        demandedServicesData:[],
        allDemandedServicesData:[],
        getSP: async () => {
            const token = await getData("token")
            await axios.post(`${url}/get-sp`, {
                token
            }).then((e) => {

                set(() => ({
                    data: e.data.data
                }))
            }).catch((e) => {

            })
        },
        getServices: async (category, sub_category) => {
            if (category) {
                set(() => ({
                    c_data: {}
                }))
            }
            else if (sub_category) {
                set(() => ({
                    sc_data: {}
                }))
            }
            const coords = await getCurrentPostiton();
            const requestParams = {
                latitude: coords.latitude,
                longitude: coords.longitude,
                limit: 40,
                radius: 50,
                category: category ? category?.toLowerCase() : "",
                subCategory: sub_category ? sub_category?.toLowerCase() : "",
            };
            try {
                const response = await axios.post(`${url}/get-services`, requestParams);
                const responseData = response.data.length === 0 ? {} : response.data;

                if (category && sub_category) {
                    set(() => ({
                        sc_data: responseData,
                    }));
                } else if (category) {
                    set(() => ({
                        c_data: responseData,
                    }));
                } else {
                    set(() => ({
                        data: responseData,
                    }));
                }
            } catch (error) {
                // Handle error
            }
        },
        getDemandaService: async () => {
            const token = await getData('token')
            try {
                const receivedData = await axios.post(`${url}/get-demanded-service`, {
                    token
                })
                if (receivedData.data.data) {
                    set(() => ({
                        demandedServicesData: receivedData.data.data
                    }))
                }
            } catch (e) {
                console.log("Error in getting Demanded Service")
            }
        },
        getAllDemandedServices: async(profession) => {
            try{
                const receivedData = await axios.post(`${url}/get-all-demanded-service`,{
                    profession
                })
                if(receivedData.data.data){
                    set(()=>({
                        allDemandedServicesData:receivedData.data.data
                    }))
                }
            } catch (e){
                messagePopup(e.response.data.error, "","danger")
                console.log("Error in getting all the Demanded Service")
            }
        }, 
        getService: async (_id) => {
            set(() => ({
                serviceData: {}
            }))
            await axios.post(`${url}/get-service`, {
                _id
            }).then((e) => {
                set(() => ({
                    serviceData: e.data
                }))
            }).catch((e) => {

            })
        },
        getOrders: async () => {
            const token = await getData('token');
            await axios.post(`${url}/get-orders`, {
                token
            }).then((e) => {
                set(() => ({
                    ordersData: e.data.data
                }))
            }).catch(() => {
            })
        },
        getBookings: async () => {
            const token = await getData('token');
            await axios.post(`${url}/get-bookings`, {
                token
            }).then((e) => {
                set(() => ({
                    bookingsData: e.data.data
                }))
            })
        },
        getAllServices: async () => {
            const token = await getData('token');
            await axios.post(`${url}/get-all-services`, {
                token
            }).then((e) => {
                set(() => ({
                    allServicesData: e.data.data
                }))
            })
        },
        search: async (term) => {
            await axios.post(`${url}/search`, {
                term
            }).then((e) => {
                set(() => ({
                    searchData: e.data.data
                }))
            })
        },

    }));

export { useFetch }
