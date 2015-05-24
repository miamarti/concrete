'use strict';

describe('Services: dribbbleService', function () {
    var $httpBackend, $rootScope;
    var id = '2075611';
    var url = '';
    var result;

    /*jshint camelcase: false */
    var jsonMock = {
        id: 2075611,
        title: 'Fatty\'s pt. II',
        description: '<p>Just sent cans to print. Quenching your thirst so soon...</p>',
        width: 400,
        height: 300,
        images: {
            hidpi: 'https://d13yacurqjgara.cloudfront.net/users/52758/screenshots/2075611/fattys_can_j_fletcher.jpg',
            normal: 'https://d13yacurqjgara.cloudfront.net/users/52758/screenshots/2075611/fattys_can_j_fletcher_1x.jpg',
            teaser: 'https://d13yacurqjgara.cloudfront.net/users/52758/screenshots/2075611/fattys_can_j_fletcher_teaser.jpg'
        },
        views_count: 2461,
        likes_count: 360,
        comments_count: 21,
        attachments_count: 0,
        rebounds_count: 0,
        buckets_count: 22,
        created_at: '2015-05-22T17:36:24Z',
        updated_at: '2015-05-22T17:36:51Z',
        html_url: 'https://dribbble.com/shots/2075611-Fatty-s-pt-II',
        attachments_url: 'https://api.dribbble.com/v1/shots/2075611/attachments',
        buckets_url: 'https://api.dribbble.com/v1/shots/2075611/buckets',
        comments_url: 'https://api.dribbble.com/v1/shots/2075611/comments',
        likes_url: 'https://api.dribbble.com/v1/shots/2075611/likes',
        projects_url: 'https://api.dribbble.com/v1/shots/2075611/projects',
        rebounds_url: 'https://api.dribbble.com/v1/shots/2075611/rebounds',
        rebound_source_url: 'https://api.dribbble.com/v1/shots/1508278',
        tags: [],
        user: {
            id: 52758,
            name: 'Jay Fletcher',
            username: 'jfletcherdesign',
            html_url: 'https://dribbble.com/jfletcherdesign',
            avatar_url: 'https://d13yacurqjgara.cloudfront.net/users/52758/avatars/normal/J_FLETCHER_DESIGN_LOGO-01.jpg?1401983283',
            bio: '',
            location: 'Charleston, SC',
            links: {
                web: 'http://www.jfletcherdesign.com',
                twitter: 'https://twitter.com/jfletcherdesign'
            },
            buckets_count: 0,
            comments_received_count: 4282,
            followers_count: 10622,
            followings_count: 544,
            likes_count: 5859,
            likes_received_count: 71778,
            projects_count: 7,
            rebounds_received_count: 270,
            shots_count: 386,
            teams_count: 0,
            can_upload_shot: true,
            type: 'Player',
            pro: true,
            buckets_url: 'https://api.dribbble.com/v1/users/52758/buckets',
            followers_url: 'https://api.dribbble.com/v1/users/52758/followers',
            following_url: 'https://api.dribbble.com/v1/users/52758/following',
            likes_url: 'https://api.dribbble.com/v1/users/52758/likes',
            projects_url: 'https://api.dribbble.com/v1/users/52758/projects',
            shots_url: 'https://api.dribbble.com/v1/users/52758/shots',
            teams_url: 'https://api.dribbble.com/v1/users/52758/teams',
            created_at: '2011-08-13T23:30:38Z',
            updated_at: '2015-05-22T17:36:51Z'
        },
        team: null
    };

    // load the service module
    beforeEach(module('concreteDevApp'));

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
    }));

    it('can get an instance of dribbbleService', inject(function (dribbbleService) {
        url = dribbbleService.url + id + '?access_token=' + dribbbleService.access_token + '&token_type=' + dribbbleService.token_type;
        expect(dribbbleService).toBeDefined();
    }));

    it('can get an verification of url', inject(function (dribbbleService) {
        expect(dribbbleService.url).toEqual('https://api.dribbble.com/v1/shots/');
    }));

    it('can get an verification of access token', inject(function (dribbbleService) {
        expect(dribbbleService.access_token).not.toBe(null);
        expect(dribbbleService.access_token).not.toBe('');
    }));

    it('can get an verification of token type', inject(function (dribbbleService) {
        expect(dribbbleService.token_type).toEqual('concreteDevApp');
    }));

    it('can get an verification of popular shots calls', inject(function (dribbbleService) {
        $httpBackend.whenGET(url).respond(jsonMock);
        expect(dribbbleService.getShot(id)).toBeDefined();
        $httpBackend.flush();
    }));

    it('can get a verification of array', inject(function (dribbbleService) {
        $httpBackend.whenGET(url).respond(jsonMock);
        dribbbleService.getShot(id).then(function (data) {
            result = data;
        });
        $httpBackend.flush();
        expect(result instanceof Object).toBeTruthy();
    }));

    it('can get the expected result in query response', inject(function (dribbbleService) {
        dribbbleService.getShot(id).then(function (data) {
            result = data;
        });
        expect(result.user.username).toEqual('jfletcherdesign');
        expect(result.user.id).toEqual(52758);
    }));

});