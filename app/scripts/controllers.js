'use strict';

angular.module('sampleApp')

        .controller('contactController', ['$scope','contactForm', function($scope,contactForm) {

            $scope.contact = {email:'',mobile:'',status:'',firstname:'',lastname:''};

            $scope.getContact = function(){

                contactForm.getContacts()
                .then(
                    function(response){
                        $scope.contacts = response.data;
                    }
                );
            }

            $scope.addContact = function(){

                contactForm.addContact($scope.contact)
                    .then(
                        function(response){
                            $scope.contacts = response.data;
                        }
                    );
            }

            $scope.updateContact = function(){
                contactForm.updateContact($scope.contact)
            }

            $scope.deleteContact = function(){
                contactForm.deleteContact($scope.contact)
                .then(
                    function(response){
                        $scope.contacts = response.data;
                    }
                );
            }

            
        }])




;