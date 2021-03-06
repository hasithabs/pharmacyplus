angular
  .module('core.sdk')
  .service('NotificationSDK',
    function ($log, $q, NotificationAPI) {
      this.getPreNotifications = function (notiId) {
        var deferred = $q.defer();
        NotificationAPI.notificationData().get({id: notiId}).$promise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          deferred.reject(error);
        });
        $log.debug('NotificationSDK:getPreNotifications');
        return deferred.promise;
      };

      this.makeNotification = function (notiObj) {
        var deferred = $q.defer();
        NotificationAPI.notificationData().save({}, notiObj).$promise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          deferred.reject(error);
        });
        $log.debug('NotificationSDK:makeNotification');
        return deferred.promise;
      };

      this.updateNotificationSeen = function (notiId) {
        var deferred = $q.defer();
        NotificationAPI.notificationSeen().update({id: notiId}).$promise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          deferred.reject(error);
        });
        $log.debug('NotificationSDK:updateNotificationSeen');
        return deferred.promise;
      };

      this.getNewNotifications = function (notiId) {
        var deferred = $q.defer();
        NotificationAPI.notificationUnseen().get().$promise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          deferred.reject(error);
        });
        $log.debug('NotificationSDK:getNewNotifications');
        return deferred.promise;
      };
    });
