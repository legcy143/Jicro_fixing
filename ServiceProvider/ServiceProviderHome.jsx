import { View, Text, FlatList } from "react-native";
import React from "react";
import NotFound from "./components/NotFound";
import Button from "../../components/Button";
import { useFetch } from "../../../suppliers/BackendInteractions/Fetch";
import { useEffect } from "react";

import Card from "./components/Card";
import DemandedServiceCard from "./components/DemandedServiceCard";

const ServiceProviderHome = () => {
  const {
    data,
    getOrders,
    ordersData,
    getAllDemandedServices,
    allDemandedServicesData,
    getDemandaService,
    demandedServicesData,
  } = useFetch();
  // console.log(demandedServicesData);
  useEffect(() => {
    getOrders();
    getDemandaService();
    getAllDemandedServices(data.profession);
  }, []);
  // console.log(ordersData.length || demandedServicesData.length !== 0 )
  // console.log(ordersData.length !== 0 || demandedServicesData.length !== 0  || allDemandedServicesData.length !== 0)
  return (
    <View className="w-full h-full bg-white p-2 felx justify-center items-center">
      {ordersData.length !== 0 ||
      demandedServicesData.length !== 0 ||
      allDemandedServicesData.length !== 0 ? (
        <>
          {allDemandedServicesData.length !== 0 && (
            <FlatList
              data={allDemandedServicesData}
              renderItem={({ item }) => {
                // console.log(item)
                return <DemandedServiceCard data={item} />;
              }}
              keyExtractor={(i) => i.toString()}
            />
          )}
          {demandedServicesData.length !== 0 && (
            <FlatList

              data={demandedServicesData}
              renderItem={({ item }) => {
                return <DemandedServiceCard data={item} />;
              }}
              keyExtractor={(i) => i.toString()}
            />
            // <DemandedServiceCard data={allDemandedServicesData}
          )}
          <FlatList
            data={ordersData}
            renderItem={({ item }) => {
              return <Card data={item} />;
            }}
            keyExtractor={(i) => i.toString()}
          />
        </>
      ) : (
        <NotFound text={"No Orders Found"} />
      )}
    </View>
  );
};

export default ServiceProviderHome;
