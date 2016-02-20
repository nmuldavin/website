from django.conf.urls import url
from django.views.generic import TemplateView

app_name='pages'

urlpatterns = [
    url('^$', TemplateView.as_view(template_name='pages/index.html'), name='index'),
    url(r'^resume/', TemplateView.as_view(template_name='pages/resume.html'), name='resume'),
    url(r'^thesis/', TemplateView.as_view(template_name='pages/thesis.html'), name='thesis'),
    url(r'^projects/', TemplateView.as_view(template_name='pages/projects.html'), name='projects'),
    url(r'^contact/', TemplateView.as_view(template_name='pages/contact.html'), name='contact'),
]