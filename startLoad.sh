ECOMM_URL=
EUM_URL=
EUM_KEY=
PLATFORM=iOS

### Settings used for development
APP_NAME=com.appdynamics.ECommerce-iOS1
DEBUG_CONSOLE=true

if [ "$1" == docker ]; then
	docker run -d -e ECOMM_URL=${ECOMM_URL} -e EUM_URL=${EUM_URL} -e EUM_KEY=${EUM_KEY} -e PLATFORM=${PLATFORM} appdynamics/ecommerce-mobile-load
else
	ECOMM_URL=${ECOMM_URL} EUM_URL=${EUM_URL} EUM_KEY=${EUM_KEY} PLATFORM=${PLATFORM} APP_NAME=${APP_NAME} DEBUG_CONSOLE=${DEBUG_CONSOLE} node index.js
fi
