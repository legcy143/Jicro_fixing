import { create } from 'zustand';
import axios from "axios"
import IP from '../../constants/IP';
import { getData } from '../../helper/LocalStorage';
import { messagePopup } from '../../helper/Message';
const url = IP.local
const usePost = create(
    (set) => ({
        shouldRedirect: false,
        orderID: "",
        shouldRedirectToMapSP:false,
        shouldRedirectBooking:false,
        shouldRefreshProfileScreen:false,
        demandedServicesData:{},
        allDemandedServicesData:{},
        changeRedirections: (boolean) => {
            set(() => ({
                shouldRedirect: boolean
            }))
        },
        addService: async (data) => {
            set(() => ({
                 shouldRedirect: false
             }))
            const { title, images, price, provider, details, note, included, notIncluded, sub_category, category } = data
            const token = await getData("token")
            await axios.post(`${url}/add-service`, {
                token, title, images, price, provider, details, note, included, notIncluded, category, sub_category
            }).then((e) => {
               set(() => ({
                    shouldRedirect: true
                }))
            }).catch((e) => {
                
            })
        },
        orderService: async (service_id, service_provider_id, note) => {
            const token = await getData("token")
            await axios.post(`${url}/order-service`, {
                service_id, service_provider_id, note: note ? note : null, token
            }).then((e) => {
                set(() => ({
                    orderID: e.data.orderID,
                    shouldRedirect: true
                }))
            })
        },
        demandService : async(data) => {
            console.log(data)
            const token = await getData('token')
            try{
                const receivedData = await axios.post(`${url}/demand-a-service`,{
                    ...data,
                    token
                })
                console.log(receivedData)
                if(receivedData.data.response){
                    set(()=>({
                        shouldRedirectBooking:true
                    }))
                }
            } catch (e){
                console.log("Error in Demand Service")
            }
        },  
        acceptDemandedService : async(_id) => {
            const token = await getData('token')
            try{
                await axios.post(`${url}/accept-a-demanded-service`,{
                    token,
                    demandedServiceID:_id
                })
                // if(receivedData.data.data){
                //     set(()=>({
                //         demandedServicesData:receivedData.data.data
                //     }))
                // }
            } catch (e){
                // messagePopup(e.response.data.error, "","danger")
                console.log(e.response.data)
                // console.log("Error in getting Demanded Service")
            }
        },   
        updateStatus : async (_id, status) => {
            set(()=>({
                shouldRedirectToMapSP:false
            }))
            await axios.post(`${url}/update-status`, {
                _id, status
            }).then((e) => {
                set(()=>({
                    shouldRedirectToMapSP:e.response
                }))
            })
        },
        updateProfile : async (updates) => {
            set(()=>({
                shouldRefreshProfileScreen:false
            }))
            const token = await getData("token")
            set(()=>({
                shouldRefreshProfileScreen:false
            }))
            await axios.post(`${url}/update-profile`, {
                token,
                updates
            }).then((e) => {
                set(()=>({
                    shouldRefreshProfileScreen:true
                }))
            })
        }
    }));


export { usePost }
