FROM python:3.7-slim
RUN pip install flask
RUN pip install flask-mysql
RUN pip install -U flask-cors
COPY app.py /app.py
CMD ["python","app.py"]