'use strict';

angular.module('sampleApp')

        .constant("baseURL","http://localhost:8080")

        .service('contactForm', ['$http','baseURL', function($http,baseURL) {
    
                this.getContacts = function(){
                    return $http.get(baseURL+"/get");
                };
                this.addContact = function (contact) {
                    console.log(contact);
                    return $http.post(baseURL+"/post",contact);
                };

                this.updateContact = function(contact){
                    return $http.put(baseURL+"/put",contact);
                };

            this.deleteContact = function(contact){
                return $http.put(baseURL+"/delete",contact);
            };
        }])

;