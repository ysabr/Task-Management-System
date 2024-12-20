from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient

class TaskTests(TestCase):
    def test_list_tasks(self):
        client = APIClient()
        response = client.get(reverse('task-list'))  # from the router
        self.assertEqual(response.status_code, 200)
