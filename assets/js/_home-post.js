/*!
  JS group for layout Home or Post
*/

{% include_relative _commons.js %}

{% include_relative _utils/timeago.js %}
{% include_relative lib/gitalk.min.js %}


{% if site.google_analytics.pv.enabled %}

  {% include_relative _pv-config.js %}

  {% include_relative _utils/pageviews.js %}

  {% include_relative lib/_countUp.min.js %}

{% endif %}
