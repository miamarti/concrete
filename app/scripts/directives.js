/**
 * Renders html attributes
 */
angular.module('concreteDevApp').directive('ngConcreteHtml', [function () {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            element.context.innerHTML = attrs.value;
        }
    };
}]);

/**
 * Renders html attributes
 */
angular.module('concreteDevApp').directive('ngConcreteHtml', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(attrs.ngConcreteHtml, function (value) {
                if (value != undefined) {
                    element.context.innerHTML = value;
                }
            });
        }
    };
}]);

/**
 * Renders Concrete Shot's
 */
angular.module('concreteDevApp').directive('ngConcreteShot', [function () {
    return {
        restrict: 'A',
        template: function () {
            var html = '';
            html += '   <div class="dimmable image">';
            html += '        <div class="ui dimmer">';
            html += '            <div class="content">';
            html += '                <div class="center">';
            html += '                    <div class="ui inverted button" data-ng-click="getDetails(data.id)">Detalhes</div>';
            html += '              </div>';
            html += '          </div>';
            html += '        </div>';
            html += '       <img src="{{data.images.teaser}}">';
            html += '   </div>';
            html += '   <div class="content">';
            html += '     <a class="header">{{data.title}}</a>';
            html += '     <div class="meta">';
            html += '         <span class="date text-overflow"><ng-concrete-html value="{{data.description}}" class="text-overflow"></ng-concrete-html></span>';
            html += '     </div>';
            html += '   </div>';
            html += '   <div class="extra content">';
            html += '     <a>';
            html += '         <i class="eye icon"></i> {{data.views_count}}';
            html += '     </a>';
            html += '     &nbsp;&nbsp;';
            html += '     <a>';
            html += '         <i class="like icon"></i> {{data.likes_count}}';
            html += '     </a>';
            html += '   </div>';
            return html;
        },
        link: function (scope, element, attrs) {
            setTimeout(function () {
                $('.special.cards #' + attrs.id + ' .image').dimmer({
                    on: 'hover'
                });
            }, 250);
        }
    };
}]);


/**
 * Infinite Scroll
 */
angular.module('concreteDevApp').directive('infiniteScroll', function () {
    var runSubmit;
    return {
        link: function (scope, element, attrs) {
            setTimeout(function () {
                $(window).on('scroll', function () {
                    if ($(window).scrollTop() + $(window).height() >= $(element).height()) {
                        runSubmit = setTimeout(function () {
                            scope.$apply(attrs.infiniteScroll);
                        }, 900);
                    }
                });
            }, 1000);
        }
    };
});