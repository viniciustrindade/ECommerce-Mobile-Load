source localEnv.sh

docker run -d -e ECOMM_URL=${ECOMM_URL} -e EUM_URL=${EUM_URL} -e EUM_KEY=${EUM_KEY} -e PLATFORM=${PLATFORM} appdynamics/ecommerce-mobile-load
