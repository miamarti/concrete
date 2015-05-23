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

angular.module('concreteDevApp').directive('ngConcreteShot', [function () {
    return {
        restrict: 'A',
        template: function () {
            var html = '';
            html += '   <div class="dimmable image">';
            html += '        <div class="ui dimmer">';
            html += '            <div class="content">';
            html += '                <div class="center">';
            html += '                    <div class="ui inverted button">Detalhes</div>';
            html += '              </div>';
            html += '          </div>';
            html += '        </div>';
            html += '       <img src="https://d13yacurqjgara.cloudfront.net/users/52758/screenshots/2075611/fattys_can_j_fletcher_teaser.jpg">';
            html += '   </div>';
            html += '   <div class="content">';
            html += '     <a class="header">{{data.title}}</a>';
            html += '     <div class="meta">';
            html += '         <span class="date"><ng-concrete-html value="{{data.description}}" class="text-overflow"></ng-concrete-html></span>';
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


angular.module('concreteDevApp').directive('infiniteScroll', function () {
    return function (scope, elm, attr) {
        var raw = elm[0];
        elm.bind('scroll', function () {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
});